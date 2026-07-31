import { Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { HeaderPage } from "./HeaderPage";
import { HeroPage } from "./HeroPage";
import { SearchPage } from "./SearchPage";
import { CategoryPage } from "./CategoryPage";

export class HomePage extends BasePage {
  readonly header: HeaderPage;
  readonly hero: HeroPage;
  readonly search: SearchPage;
  readonly category: CategoryPage;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderPage(page);
    this.hero = new HeroPage(page);
    this.search = new SearchPage(page);
    this.category = new CategoryPage(page);
  }

  async open() {
    await this.navigate("/");
  }
}