
class TabLink {
  constructor(link) {
    this.link = link;
    //console.log(this.link.dataset.tab);
    this.data = document.querySelector(`.tabs-item[data-tab="${this.link.dataset.tab}"]`); 
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.data);
    this.link.addEventListener('click', this.select.bind(this));

  }
  select() {  
    //// Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    //// Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    })
    //// Add a class named "tabs-link-selected" to this link
    this.link.classList.add('tabs-link-selected');
    this.tabItem.select();
  };
}

class TabItem {
  constructor(tabItem) {
    //// Assign this.element to the passed in element
    this.tabItem = tabItem;
  }
  select() {
    //// Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    //// Remove the class "tabs-item-selected" from each element
    items.forEach(tabItem => tabItem.classList.remove('tabs-item-selected'));
    //// Add a class named "tabs-item-selected" to this element
    //console.log(this.tabItem);
    this.tabItem.classList.add('tabs-item-selected');
    // this.tabItem.select();
  }
};

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link');
  links.forEach(function(link){
    return new TabLink(link);
});
