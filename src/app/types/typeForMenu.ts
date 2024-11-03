// src/types/typeForMenu.ts

export type MenuItemType = {
    name: string;          // 메뉴 이름
    path: string;          // 라우팅 경로 (디렉토리명)
    sort_order: number;    // 정렬 순서
    items: MenuItemType[]; // 하위 메뉴 아이템
};