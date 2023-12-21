import { arrayToObject } from "$lib/utils";
import type { PageLoad } from "./$types";
import type { PersonData } from "./types";

export const load: PageLoad = async ({ fetch }) => {
  async function getNaughtyNiceList() {
    const res = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json");
    const data = await res.json();
    return arrayToObject(data);
  }

  return {
    naughtyNiceList: (await getNaughtyNiceList()) as PersonData
  };
};
