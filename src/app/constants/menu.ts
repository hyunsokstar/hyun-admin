// src/types/typeForMenu.ts
export interface MenuItemType {
    name: string;
    path: string;
    sort_order: number;
    items: MenuItemType[];
}

// src/constants/menu.ts
export const ADMIN_MENU_ITEMS: MenuItemType[] = [
    {
        name: "학습 콘텐츠 관리",
        path: "lcms-admin",
        sort_order: 1,
        items: [
            {
                name: "선생님 관리",
                path: "teacher-admin",
                sort_order: 1,
                items: [
                    { name: "선생님 목록 조회", path: "teacher-list", sort_order: 1, items: [] },
                    { name: "선생님 등록", path: "teacher-register", sort_order: 2, items: [] },
                    { name: "선생님 노출 관리", path: "teacher-display-admin", sort_order: 3, items: [] }
                ]
            },
            {
                name: "과목 관리",
                path: "subject-management",
                sort_order: 2,
                items: [
                    { name: "과목 목록 조회", path: "subject-list", sort_order: 1, items: [] },
                    { name: "과목 등록", path: "subject-register", sort_order: 2, items: [] }
                ]
            },
            {
                name: "커리큘럼 관리",
                path: "curriculum-admin",
                sort_order: 3,
                items: [
                    {
                        name: "차시 유형 관리",
                        path: "lesson-type-admin",
                        sort_order: 1,
                        items: [
                            { name: "차시 유형 목록 조회", path: "lesson-type-list", sort_order: 1, items: [] },
                            { name: "차시 유형 등록", path: "lesson-type-register", sort_order: 2, items: [] }
                        ]
                    },
                    {
                        name: "신규 커리큘럼",
                        path: "new-curriculum",
                        sort_order: 2,
                        items: [
                            { name: "신규 커리큘럼 목록 조회", path: "new-curriculum-list", sort_order: 1, items: [] },
                            { name: "커리큘럼 등록", path: "curriculum-register", sort_order: 2, items: [] },
                            { name: "차시 콘텐츠 구성", path: "lesson-content", sort_order: 3, items: [] },
                            { name: "선생님 한마디 구성", path: "teacher-comment", sort_order: 4, items: [] },
                            { name: "운영 노출", path: "curriculumn-operation-exposure", sort_order: 5, items: [] }
                        ]
                    },
                    { name: "운영 중인 커리큘럼", path: "ongoing-curriculum", sort_order: 3, items: [] },
                    { name: "종료된 커리큘럼", path: "ended-curriculum", sort_order: 4, items: [] }
                ]
            },
            {
                name: "콘텐츠 관리",
                path: "content-management",
                sort_order: 4,
                items: [
                    {
                        name: "강의 동영상",
                        path: "lecture-video",
                        sort_order: 1,
                        items: [
                            { name: "강의 동영상 리스트", path: "lecture-video-list", sort_order: 1, items: [] },
                            { name: "강의 동영상 등록/수정", path: "lecture-video-register", sort_order: 2, items: [] }
                        ]
                    },
                    {
                        name: "평가(문제)",
                        path: "evaluation",
                        sort_order: 2,
                        items: [
                            { name: "문제 관리", path: "problem-management", sort_order: 1, items: [] }
                        ]
                    },
                    {
                        name: "선생님 한마디 템플릿",
                        path: "teacher-comment-template",
                        sort_order: 3,
                        items: [
                            { name: "선생님 한마디 voice 리스트", path: "teacher-voice-list", sort_order: 1, items: [] },
                            { name: "선생님 한마디 voice 등록", path: "teacher-voice-register", sort_order: 2, items: [] },
                            { name: "선생님 한마디", path: "teacher-comment-list", sort_order: 3, items: [] },
                            { name: "선생님 한마디 템플릿 등록/수정", path: "teacher-comment-template-register", sort_order: 4, items: [] },
                            { name: "선생님 한마디 글로벌 맵핑", path: "teacher-comment-global-mapping", sort_order: 5, items: [] }
                        ]
                    }
                ]
            },
            {
                name: "오늘의 콘텐츠",
                path: "today-content",
                sort_order: 5,
                items: [
                    {
                        name: "추천 콘텐츠",
                        path: "recommended-content",
                        sort_order: 1,
                        items: [
                            { name: "추천 콘텐츠 리스트", path: "recommended-content-list", sort_order: 1, items: [] },
                            { name: "추천 콘텐츠 등록/수정", path: "recommended-content-register", sort_order: 2, items: [] }
                        ]
                    },
                    {
                        name: "오늘의 퀴즈",
                        path: "today-quiz",
                        sort_order: 2,
                        items: [
                            { name: "오늘의 퀴즈 리스트", path: "today-quiz-list", sort_order: 1, items: [] },
                            { name: "오늘의 퀴즈 등록/수정", path: "today-quiz-register", sort_order: 2, items: [] }
                        ]
                    },
                    {
                        name: "자료 콘텐츠",
                        path: "resource-content",
                        sort_order: 3,
                        items: [
                            { name: "자료 콘텐츠 리스트", path: "resource-content-list", sort_order: 1, items: [] },
                            { name: "자료 콘텐츠 등록/수정", path: "resource-content-register", sort_order: 2, items: [] }
                        ]
                    }
                ]
            },
            {
                name: "교재 관리",
                path: "textbook-management",
                sort_order: 6,
                items: [
                    {
                        name: "교재 정보",
                        path: "textbook-status",
                        sort_order: 1,
                        items: [
                            { name: "교재 정보 등록/수정", path: "textbook-status-list", sort_order: 1, items: [] },
                            { name: "교재 정보 조회", path: "textbook-status-preview", sort_order: 2, items: [] }
                        ]
                    },
                    {
                        name: "교재 학습",
                        path: "textbook-info",
                        sort_order: 2,
                        items: [
                            { name: "교재 학습", path: "textbook-info-list", sort_order: 1, items: [] }
                        ]
                    },
                    {
                        name: "평가 관리",
                        path: "learning-manage",
                        sort_order: 3,
                        items: [
                            { name: "문제 은행", path: "learning-manage-status", sort_order: 1, items: [] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "쇼핑몰 관리",
        path: "shoppingmall-admin",
        sort_order: 2,
        items: [
            {
                name: "상품 관리",
                path: "product-admin",
                sort_order: 1,
                items: [
                    { name: "카테고리 관리", path: "category-admin", sort_order: 1, items: [] },
                    { name: "품목 관리", path: "item-admin", sort_order: 2, items: [] },
                    { name: "상품 관리", path: "product-listing", sort_order: 3, items: [] },
                    {
                        name: "쿠폰 관리",
                        path: "coupon-admin",
                        sort_order: 4,
                        items: [
                            { name: "조회", path: "coupon-view", sort_order: 1, items: [] },
                            { name: "등록", path: "coupon-register", sort_order: 2, items: [] }
                        ]
                    },
                    {
                        name: "상품 이미지 관리",
                        path: "product-image-admin",
                        sort_order: 5,
                        items: [
                            { name: "상품 이미지 업로드", path: "product-image-upload", sort_order: 1, items: [] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "게시판 관리",
        path: "board-admin",
        sort_order: 3,
        items: [
            { name: "카테고리 관리", path: "category-admin", sort_order: 1, items: [] },
            { name: "게시판 관리", path: "board-management", sort_order: 2, items: [] },
            { name: "포스팅 관리", path: "post-management", sort_order: 3, items: [] },
            { name: "신고 관리", path: "report-management", sort_order: 4, items: [] }
        ]
    }
];