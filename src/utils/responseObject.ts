interface ResponseObjectType {
  status: string;
  data: any | null;
  error: any | null;
}

const responseObject: ResponseObjectType = {
  status: "",
  data: null,
  error: null,
};

export default responseObject;
