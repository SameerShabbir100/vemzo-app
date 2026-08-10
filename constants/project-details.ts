import { ProjectDetail } from "./types/project-details";
import { shopifyStoreDetail } from "./projects/shopify-store";
import { shopifyAppDetail } from "./projects/shopify-app";
import { posSystemsDetail } from "./projects/pos-systems";
import { crmSystemsDetail } from "./projects/crm-systems";
import { hrmSystemsDetail } from "./projects/hrm-systems";
import { lmsPlatformsDetail } from "./projects/lms-platforms";
import { customSaasDetail } from "./projects/custom-saas";
import { mernStackDetail } from "./projects/mern-stack";
import { mevnStackDetail } from "./projects/mevn-stack";

export * from "./types/project-details";

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "shopify-store-development": shopifyStoreDetail,
  "shopify-app-development": shopifyAppDetail,
  "pos-systems": posSystemsDetail,
  "crm-systems": crmSystemsDetail,
  "hrm-systems": hrmSystemsDetail,
  "lms-platforms": lmsPlatformsDetail,
  "custom-saas-applications": customSaasDetail,
  "mern-stack-development": mernStackDetail,
  "mevn-stack-development": mevnStackDetail,
};
