import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productCards: Locator;
  readonly noProductsMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.searchInput = page.getByTestId("search-input");
    this.searchButton = page.getByTestId("search-button");
    this.productCards = page.getByTestId("product-card");
    this.noProductsMessage = page.getByTestId("no-products-message");
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async clearSearch() {
    await this.searchInput.clear();
    await this.searchButton.click();
  }

  async expectNoProducts() {
    await expect(this.noProductsMessage).toBeVisible();
  }

  async getProductCount() {
    return await this.productCards.count();
  }
}