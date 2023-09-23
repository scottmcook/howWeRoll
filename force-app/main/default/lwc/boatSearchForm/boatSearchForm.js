import { LightningElement, wire } from 'lwc';
import getBoatTypes from "@salesforce/apex/BoatDataService.getBoatTypes"

export default class BoatSearchForm extends LightningElement {
	selectedBoatId = '';

	@wire(getBoatTypes)
	boatTypes;
}