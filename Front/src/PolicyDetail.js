/*
import React from 'react';
import './PolicyDetail.css';
import PolicyData_Temp from "./PolicyData_Temp";
import {useParams} from "react-router-dom";
// 정책 데이터 예시

const policyData = [
    {
        id: '1',
        title: '청년 창업 지원 프로젝트',
        description: '창업을 꿈꾸는 청년들을 위한 맞춤형 지원 프로그램입니다.',
        details: '자세한 정책 내용과 신청 방법은 관련 부서에 문의하세요.',
        image: '/images/placeholder1.png',
    },
    {
        id: '2',
        title: '주거 안정 지원',
        description: '청년 임대주택과 관련된 주거 안정 정책입니다.',
        details: '임대 지원과 신청 절차에 대해 더 알아보세요.',
        image: '/images/placeholder2.png',
    },
    // 추가 정책 데이터...
];

const PolicyDetail = () => {
    const { id } = useParams(); //  정책 ID 가져오기
    const policy = PolicyData_Temp.find((item) => item.id === id);

    if (!policy) {
        return <div>정책 정보를 찾을 수 없습니다. ㅅ1발</div>;
    }

    return (
        <div className="policy-detail-container">
            <h1>{policy.title}</h1>
            <img src={policy.image} alt={policy.title} className="policy-detail-image" />
            <p>{policy.description}</p>
            <p>{policy.details}</p>
        </div>
    );
};

export default PolicyDetail;
*/

import React, { useState, useEffect } from 'react';
import './PolicyDetail.css';
import { useParams } from 'react-router-dom';
import config from './config';

const PolicyDetail = () => {
    const { id } = useParams(); // 정책 ID 가져오기
    const [policy, setPolicy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const response = await fetch(`${config.API_BASE_URL}/policyapp/${id}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch policy data');
                }
                const data = await response.json();
                setPolicy(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPolicy();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!policy) {
        return <div>정책 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="policy-detail-container">
            <h1>{policy.title}</h1>
            <img src={policy.image} alt={policy.content} className="policy-detail-image" />
            <p>{policy.created_at}</p>
            <p>{policy.description}</p>
            <p>{policy.details}</p>
            <p>{policy.ing}</p>
        </div>
    );
};

export default PolicyDetail;
