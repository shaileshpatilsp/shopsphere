import { test, expect } from "@playwright/test";
import { SearchPage } from "../../pages/SearchPage";

test.describe("Search Feature", () => {

  test("should search for an existing product", async ({ page }) => {

    const searchPage = new SearchPage(page);

    await page.goto("http://localhost:5173");

    await searchPage.search("Laptop");

    expect(await searchPage.getProductCount()).toBeGreaterThan(0);

    await expect(searchPage.noProductsMessage).toBeHidden();

  });

  test("Search by category", async ({ page }) => {

    const searchPage = new SearchPage(page);

    await page.goto("http://localhost:5173");

    await searchPage.search("Electronics");

    expect(await searchPage.getProductCount()).toBeGreaterThan(0);

    await expect(searchPage.noProductsMessage).toBeHidden();

  });

   test("Case-insensitive search", async ({ page }) => {

    const searchPage = new SearchPage(page);

    await page.goto("http://localhost:5173");

    await searchPage.search("LapToP");

    expect(await searchPage.getProductCount()).toBeGreaterThan(0);

    await expect(searchPage.noProductsMessage).toBeHidden();

  });

 test("No products found", async ({ page }) => {

    const searchPage = new SearchPage(page);

    await page.goto("http://localhost:5173");

    await searchPage.search("xyz123");


        await expect(searchPage.noProductsMessage).toBeVisible;


  });

  test("Empty search", async ({ page }) => {

    const searchPage = new SearchPage(page);

    await page.goto("http://localhost:5173");

    await searchPage.search("");

    expect(await searchPage.getProductCount()).toBeGreaterThan(7);

    await expect(searchPage.noProductsMessage).toBeHidden();

  });

   test("Search using Enter", async ({ page }) => {

    const searchPage = new SearchPage(page);

    await page.goto("http://localhost:5173");

    await searchPage.searchInput.fill("Laptop");
    await searchPage.searchInput.press('Enter')

    expect(await searchPage.getProductCount()).toBeGreaterThan(0);

    await expect(searchPage.noProductsMessage).toBeHidden();

  });


});