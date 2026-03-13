import { Request } from "express";
import { 
  ComponentQuery, 
  ComponentParams, 
  ComponentSectionQuery,
  TokensQuery,
  SearchQuery
} from "./validation.js";

// Extended Request types for specific endpoints
export type ComponentListRequest = Request & {
  validatedQuery: ComponentQuery;
};

export type ComponentDetailRequest = Request & {
  validatedParams: ComponentParams;
  validatedQuery: ComponentSectionQuery;
};

export type TokensRequest = Request & {
  validatedQuery: TokensQuery;
};

export type SearchRequest = Request & {
  validatedQuery: SearchQuery;
};
