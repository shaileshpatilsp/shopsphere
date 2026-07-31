import { test, expect } from "@playwright/test";
import { HeaderPage } from "../../pages/HeaderPage";
test.describe("Header Component", () => {
  test("should display all header elements", async ({ page }) => {
    const header = new HeaderPage(page);

    await header.open();

    await expect(header.header).toBeVisible();
    await expect(header.logo).toBeVisible();
    await expect(header.searchInput).toBeVisible();
    await expect(header.loginButton).toBeVisible();
    await expect(header.cartButton).toBeVisible();

    await expect(header.homeLink).toBeVisible();
    await expect(header.productsLink).toBeVisible();
    await expect(header.dealsLink).toBeVisible();
    await expect(header.aboutLink).toBeVisible();
    await expect(header.contactLink).toBeVisible();

    await expect(page).toHaveTitle(/ShopSphere|Vite/i);

    
  });
});