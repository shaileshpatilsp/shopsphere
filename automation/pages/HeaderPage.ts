import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";



export class HeaderPage extends BasePage  {
  readonly page: Page;
  readonly header: Locator;
  readonly logo: Locator;
  readonly searchInput: Locator;
  readonly loginButton: Locator;
  readonly cartButton: Locator;
  readonly homeLink: Locator;
  readonly productsLink: Locator;
  readonly dealsLink: Locator;
  readonly aboutLink: Locator;
  readonly contactLink: Locator;

 constructor(page: Page) {
    super(page);
  

    this.page = page;

    this.header = page.getByTestId("header");
    this.logo = page.getByTestId("logo");
    this.searchInput = page.getByTestId("search-input");
    this.loginButton = page.getByTestId("login-button");
    this.cartButton = page.getByTestId("cart-button");

    this.homeLink = page.getByTestId("nav-home");
    this.productsLink = page.getByTestId("nav-products");
    this.dealsLink = page.getByTestId("nav-deals");
    this.aboutLink = page.getByTestId("nav-about");
    this.contactLink = page.getByTestId("nav-contact");
  }

 
  async open() {

      await this.navigate("/");

}
     async search(text: string) {
        await this.searchInput.fill(text);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clickCart() {
        await this.cartButton.click();
    }

    async clickHome() {
        await this.homeLink.click();
    }

    async clickProducts() {
        await this.productsLink.click();
    }

}