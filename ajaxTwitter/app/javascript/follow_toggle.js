import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton
    this.handleClick = this.handleClick.bind(this)
    this.toggleButton.addEventListener('click',this.handleClick)

  }

  async handleClick(event) {
    // you'll be replacing this form submission with an AJAX request shortly
    event.preventDefault();
    console.log("hello")


  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
