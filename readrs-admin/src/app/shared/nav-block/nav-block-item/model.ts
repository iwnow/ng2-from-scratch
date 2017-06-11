export interface INavBlockItemModel {
	routeLink: string;
	name: string;
	id?: number;
	onClick?: (item: INavBlockItemModel) => void;
}