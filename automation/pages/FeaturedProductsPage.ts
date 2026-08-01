import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FeaturedProductsPage extends BasePage {
  readonly section: Locator;
  readonly title: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    super(page);

    this.section = page.getByTestId("featured-products");
    this.title = page.getByTestId("featured-title");
    this.productCards =
  this.section.getByTestId("product-card");
  }

  async verifySectionVisible() {
    await expect(this.section).toBeVisible();
  }

  async verifyTitle() {
    await expect(this.title).toHaveText("Featured Products");
  }

  async verifyProductCount(count: number) {
    await expect(this.productCards).toHaveCount(count);
  }

  async verifyHidden() {
    await expect(this.section).toBeHidden();
  }
}