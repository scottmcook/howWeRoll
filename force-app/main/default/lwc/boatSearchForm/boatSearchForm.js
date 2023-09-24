import { LightningElement, wire } from "lwc";
import getBoatTypes from "@salesforce/apex/BoatDataService.getBoatTypes";

export default class BoatSearchForm extends LightningElement {
  selectedBoatId = "";
  error = undefined;
  searchOptions;

  @wire(getBoatTypes)
  boatTypes({ error, data }) {
    if (data) {
      this.searchOptions = data.map((type) => {
        // TODO: complete the logic
        return { label: type.Name };
      });
      this.searchOptions.unshift({ label: "All Types", value: "" });
    } else if (error) {
      this.searchOptions = undefined;
      this.error = error;
    }
  }

  // Show these values in a <lightning-combobox> that uses the selectedBoatTypeId for the value being displayed, and the values in the property searchOptions for the available options.

  // Changing the value of this dropdown menu must dynamically trigger the search for the boats and display the results in the boatSearchResults component.

  // You need to fire a custom event named search, using the method handleSearchOptionChange(event) to pass the value of selectedBoatTypeId in the detail using the key boatTypeId through a dispatched event.

  // populate the map
  // returning the types names and Ids.

  // The newly created custom event search must cause the application to query for the boats.

  // handleSearchOptionChange(event) {
  //   // Create the const searchEvent
  //   // searchEvent must be the new custom event search
  //   searchEvent;
  //   this.dispatchEvent(searchEvent);
  // }
}
