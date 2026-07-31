import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { SearchPage } from "../../pages/SearchPage";
import { CategoryPage } from "../../pages/CategoryPage";

test.describe("Category Filter", () => {

  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
  });

  test("should display all category chips", async ({ page }) => {
    const category = new CategoryPage(page);

    await category.verifyCategoryVisible("All");
    await category.verifyCategoryVisible("Electronics");
    await category.verifyCategoryVisible("Accessories");
    await category.verifyCategoryVisible("Footwear");
    await category.verifyCategoryVisible("Stationery");
    await category.verifyCategoryVisible("Home & Kitchen");
    await category.verifyCategoryVisible("Books");
  });

  test("should filter Electronics products", async ({ page }) => {
    const category = new CategoryPage(page);

    await category.selectCategory("Electronics");
    await category.verifyProductCount(5);
  });

  test("should filter Books products", async ({ page }) => {
    const category = new CategoryPage(page);

    await category.selectCategory("Books");
    await category.verifyProductCount(1);
  });

  test("should show all products when All is selected", async ({ page }) => {
    const category = new CategoryPage(page);

    await category.selectCategory("All");
    await category.verifyProductCount(18);
  });

  test("should combine category and search filters", async ({ page }) => {
    const category = new CategoryPage(page);
    const search = new SearchPage(page);

    await category.selectCategory("Electronics");
    await search.search("Laptop");

    await category.verifyProductCount(1);
  });

  test("should show no products when filters do not match", async ({ page }) => {
    const category = new CategoryPage(page);
    const search = new SearchPage(page);

    await category.selectCategory("Books");
    await search.search("Laptop");

    await category.verifyNoProductsMessage();
  });

});