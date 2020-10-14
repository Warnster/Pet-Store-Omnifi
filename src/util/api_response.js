export const ApiResponseStatus = {
    SUCCESS : 1,
    FAIL : 0
  }

export class ApiResponse {

    data;
    totalRows;
    status;
    errors;
    message;
    totalFilteredRows;
  
    constructor(resParams) {
  
      this.data = resParams.data;
      this.totalRows = resParams.totalRows;

  
      this.status = typeof resParams.status !== 'undefined' ? resParams.status
        : ApiResponseStatus.SUCCESS;
  
      this.errors = resParams.errors || [];
      this.message = resParams.message || '';
  
      this.totalFilteredRows = resParams.totalFilteredRows;
    }
  
    toJSON() {
      return {
        data: this.data,
        totalRows: this.totalRows,
        status: this.status,
        errors: this.errors,
        message: this.message,
        totalFilteredRows: this.totalFilteredRows
      };
    }
  };