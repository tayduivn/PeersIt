import moment from 'moment';

export class CustomerNewOrderModel {
	items = [];
	description: string;
	estimatedgGoodsPrice: any;
	paymentMode: any;
	startTime: any;
	endTime: any;
	isChecked = 0;
	orderType: any;
	zipcode: any;
	using_geolocation: boolean = false;
/* 	minStart: any = moment(new Date().toISOString()).locale('es').format();
	maxStart: any = moment(new Date(new Date(this.minStart).getTime() + (1000 * 60 * 60 * 24 * 365 * 5)).toISOString()).locale('es').format();
 */	minStart: any = new Date().toISOString();
	maxStart: any = new Date(new Date(this.minStart).getTime() + (1000 * 60 * 60 * 24 * 365 * 5)).toISOString();
	dropLat: any;
	dropLong: any;
	pickLat: any;
	pickLong: any;
	setting: {
		onDemand: boolean,
		resting: boolean,
		maxDistance: number
	} = {
		onDemand: false,
		resting: false,
		maxDistance:3000
	};/* {
		onDemand: true,
		resting: true,
		maxDistance:3000
	}; */
	couponCode: string = "";
}