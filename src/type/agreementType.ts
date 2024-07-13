export interface AgreementRequestJson {
  version: string;
  content: string;
}

export interface AgreementResponseJson {
  id: number;
  version: string;
  content: string;
  createdDate: string;
  modifiedDate: string;
}

export interface AgreementFormValue {
  version: string;
  content: string;
}
