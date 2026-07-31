import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HeroPage extends BasePage {
  readonly heroSection: Locator;
  readonly heroTitle: Locator;
  readonly heroDescription: Locator;
  readonly shopNowButton: Locator;
  readonly browseCategoriesButton: Locator;

  constructor(page: Page) {
    super(page);

    this.heroSection = page.getByTestId("hero-section");
    this.heroTitle = page.getByTestId("hero-title");
    this.heroDescription = page.getByTestId("hero-description");
    this.shopNowButton = page.getByTestId("shop-now-button");
    this.browseCategoriesButton = page.getByTestId("browse-categories-button");
  }

  async open() {
    await this.navigate("/");
  }

  async clickShopNow() {
    await this.shopNowButton.click();
  }

  async clickBrowseCategories() {
    await this.browseCategoriesButton.click();
  }
}