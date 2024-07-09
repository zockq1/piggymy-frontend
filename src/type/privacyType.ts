export interface PrivacyRequestJson {
  version: string;
  content: string;
}

export interface PrivacyResponseJson {
  id: number;
  version: string;
  content: string;
  createdDate: string;
  modifiedDate: string;
}

export interface PrivacyFormValue {
  version: string;
  content: string;
}
