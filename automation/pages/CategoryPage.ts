import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CategoryPage extends BasePage {

  readonly categoryList: Locator;
  readonly productCards: Locator;
  readonly noProductsMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.categoryList = page.getByTestId("category-list");
    this.productCards = page.getByTestId("product-card");
     this.noProductsMessage = page.getByTestId("no-products-message");
  }

  categoryChip(category: string): Locator {
    return this.page.getByTestId(
      `category-${category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}`
    );
  }

  async selectCategory(category: string) {
    await this.categoryChip(category).click();
  }

  async verifyCategoryVisible(category: string) {
    await expect(this.categoryChip(category)).toBeVisible();
  }

  async verifyProductCount(count: number) {
    await expect(this.productCards).toHaveCount(count);
  }

  async verifyNoProductsMessage() {
    await expect(this.noProductsMessage).toBeVisible();
  }
}