import { test, expect } from "@playwright/test";
import { HeroPage } from "../../pages/HeroPage";

test.describe("Hero Section", () => {
  test("Verify hero content @smoke", async ({ page }) => {
    const hero = new HeroPage(page);

    await hero.open();

    await expect(hero.heroSection).toBeVisible();

    await expect(hero.heroTitle).toHaveText(
      "Welcome to ShopSphere"
    );

    await expect(hero.heroDescription).toHaveText(
      "Discover amazing products at unbeatable prices."
    );

    await expect(hero.shopNowButton).toBeVisible();
    await expect(hero.shopNowButton).toHaveText("Shop Now");

    await expect(hero.browseCategoriesButton).toBeVisible();
    await expect(hero.browseCategoriesButton).toHaveText(
      "Browse Categories"
    );
  });
});