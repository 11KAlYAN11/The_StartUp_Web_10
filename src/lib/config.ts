import fs from "fs";
import path from "path";
import { load } from "js-yaml";
import type { OrgConfig } from "@/types/config";

export function getOrgConfig(): OrgConfig {
  const orgSlug = process.env.ORG_CONFIG ?? "default";
  const filePath = path.join(process.cwd(), "config", `${orgSlug}.yaml`);
  const raw = fs.readFileSync(filePath, "utf8");
  return load(raw) as OrgConfig;
}
