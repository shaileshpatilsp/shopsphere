import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";




test.describe("Featured Products", () => {

  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
  });

  test("should display featured products on initial page load", async ({ page }) => {
    const home = new HomePage(page);

    await home.featuredProducts.verifySectionVisible();
    await home.featuredProducts.verifyTitle();
    await home.featuredProducts.verifyProductCount(4);
  });

  test("should hide featured products while searching", async ({ page }) => {
    const home = new HomePage(page);

    await home.search.search("Laptop");

    await home.featuredProducts.verifyHidden();
  });

  test("should hide featured products after selecting a category", async ({ page }) => {
    const home = new HomePage(page);

    await home.category.selectCategory("Electronics");

    await home.featuredProducts.verifyHidden();
  });

});