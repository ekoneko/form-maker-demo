export interface params {
  title?: string;
  isRequired?: boolean;
  [propNames: string]: any;
}

export function generateFormItemProps(params: params) {
  const {
    title = '',
    isRequired,
  } = params;

  return {
    label: title,
    required: isRequired,
  }
}
