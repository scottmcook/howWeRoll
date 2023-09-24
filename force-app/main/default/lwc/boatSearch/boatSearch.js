import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class BoatSearch extends NavigationMixin(LightningElement) {
  isLoading;
  handleLoading() {
    this.isLoading = true;
  }
  handleDoneLoading() {
    this.isLoading = false;
  }
  // searchBoats(event) {}
  createNewBoat() {
    this[NavigationMixin.Navigate]({
      // boatAddReviewForm here
    });
  }
}
