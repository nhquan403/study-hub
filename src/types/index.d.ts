export interface SideBarItem {
    path: string;
    title: string;
    icon: React.ReactNode;
}

export interface IActiveLink {
    url: string;
    children: React.ReactNode;
}
