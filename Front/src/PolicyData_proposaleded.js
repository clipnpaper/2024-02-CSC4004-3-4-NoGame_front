/*
const PolicyDetail_Proposal = [
    {
        id: '1',
        title: '각 대학 수면실 확대 제안합니다!!',
        background: '예시로 동국대학교 서울캠퍼스의 경우 기존 중앙 도서관 3층에 빈백이 있는 곳이 수면실 대용으로 사용중인데 공간이 협소합니다. ' +
            '그러나 다향관 1층처럼 죽어있는 공간이 있습니다. 각 대학교에서 죽어있는 공간이 있고 수면실을 사용하고자 할때 ' +
            '정부에서 지원금을 보조해주는 정책이 있으면 합니다.',
        purpose: '낮잠 요건을 보장하여 학업 및 업무효율 증대, 정부의 각 학교 예산 확대',
        tags: ['#수면','#동국대' ,'#다향관', '#학교지원금확대'],
        image: '/images/sleep.jpg',
        comments: [],
        rating: 4,
        likes: 10,
    },
    {
        id: '2',
        title: '취준 졸업생 지원',
        background: '졸업 후 구직활동에 있어 자기개발공간과 취업에 필요한 서적 등 필요한 비용을 ' +
            '학교 인프라를 활용하여 추가예산 없이 도움을 받고자 합니다.',
        purpose: '졸업 이후 취직활동에 있어 생활비 보장과 일정기간 학교 시설물 이용을 통해 구직활동을 일정기간 도움을 받으면 좋겠습니다.',
        tags: ['#돈줘', '#청결'],
        image: '/images/graduate.jpg',
        comments: [],
        rating: 3,
        likes: 5,
    },
    {
        id: '3',
        title: '대학생 전공책 바우처',
        background: '전공서적은 매우 비싸며, 학업에 꼭 필요한 비용입니다. 이를 위해 경제적 부담을 줄이기 위한 바우처 제공이 필요합니다.',
        purpose: '대학생들이 학업에 집중할 수 있도록 전공책 바우처를 통해 경제적 부담을 해소합니다.',
        tags: ['#교육지원', '#바우처'],
        image: '/images/proposal1.png',
        comments: [],
        rating: 4.3,
        likes: 123,
    },
    {
        id: '4',
        title: '농촌 지역 청년 창업 지원이 필요합니다.',
        background: '농촌 지역 청년 창업이 활성화되지 않아 지역 경제 침체가 지속되고 있습니다.',
        purpose: '창업 지원금을 확대하여 농촌 지역 경제 활성화와 청년 창업을 촉진합니다.',
        tags: ['#창업지원', '#농촌창업'],
        image: '/images/placeholder5.png',
        comments: [],
        rating: 4.6,
        likes: 78,
    },
    // 추가 정책들...
];

export default PolicyDetail_Proposal;
*/
import { useState, useEffect } from 'react';
import { fetchData } from './api';

const usePolicyDetails = () => {
    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPolicies = async () => {
            try {
                const data = await fetchData('policy_ideas/'); // API 호출로 정책 데이터 가져오기
                setPolicies(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPolicies();
    }, []);

    return { policies, loading, error };
};

export default usePolicyDetails;
