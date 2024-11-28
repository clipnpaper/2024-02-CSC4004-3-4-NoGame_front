import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './PolicyList.css';
import PolicyData_Temp from './PolicyData_Temp';

const PolicyList = () => {
    const location = useLocation();
    const { selectedAge, selectedCategory, selectedGroup, selectedFeature } = location.state || {};

    const [policies, setPolicies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('latest'); // 정렬 기준: 'latest', 'popular', 'views'

    // 정책 데이터 필터링
    const fetchPolicies = useCallback(() => {
        setLoading(true);

        setTimeout(() => {
            let filteredData = PolicyData_Temp.filter((policy) => {
                const matchesAge = selectedAge ? policy.age === selectedAge : true;
                const matchesCategory = selectedCategory ? policy.category === selectedCategory : true;
                const matchesGroup = selectedGroup ? policy.group === selectedGroup : true;
                const matchesFeature = selectedFeature
                    ? Array.isArray(policy.features) && policy.features.includes(selectedFeature)
                    : true;
                const matchesSearch = searchTerm
                    ? policy.title.toLowerCase().includes(searchTerm.toLowerCase())
                    : true;

                return matchesAge && matchesCategory && matchesGroup && matchesFeature && matchesSearch;
            });

            // 정렬
            if (sortBy === 'latest') {
                filteredData = filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (sortBy === 'popular') {
                filteredData = filteredData.sort((a, b) => b.likes - a.likes);
            } else if (sortBy === 'views') {
                filteredData = filteredData.sort((a, b) => b.views - a.views);
            }

            const startIndex = (page - 1) * 10;
            const newPolicies = filteredData.slice(startIndex, startIndex + 10);
            setPolicies((prev) => [...prev, ...newPolicies]);
            setLoading(false);
        }, 1000);
    }, [selectedAge, selectedCategory, selectedGroup, selectedFeature, searchTerm, sortBy, page]);

    useEffect(() => {
        fetchPolicies();
    }, [fetchPolicies]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 10
            ) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
        setPolicies([]); // 기존 데이터를 초기화 후 새로 검색
    };

    const handleSort = (criteria) => {
        setSortBy(criteria);
        setPage(1);
        setPolicies([]); // 기존 데이터를 초기화 후 새로 정렬
    };

    return (
        <div className="policy-list-container">
            <div className="search-sort-bar">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <div className="sort-buttons">
                    <button onClick={() => handleSort('latest')} className={sortBy === 'latest' ? 'active' : ''}>
                        최신순
                    </button>
                    <button onClick={() => handleSort('popular')} className={sortBy === 'popular' ? 'active' : ''}>
                        추천순
                    </button>
                    <button onClick={() => handleSort('views')} className={sortBy === 'views' ? 'active' : ''}>
                        조회순
                    </button>
                </div>
            </div>
            <div className="policy-card-container">
                {policies.map((policy) => (
                    <div key={policy.id} className="policy-card">
                        <div className="policy-card-header">{policy.title}</div>
                        <img src={policy.image} alt={policy.title} className="policy-card-image" />
                        <div className="policy-card-body">{policy.description}</div>
                    </div>
                ))}
            </div>
            {loading && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};

export default PolicyList;
