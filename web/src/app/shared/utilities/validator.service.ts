import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidatorService {
  constructor() {}

  /**
   * This method formats the field name.
   *
   * @param field
   * @returns
   */
  getFieldName(field: any) {
    if (field.split('_')[1] === 'id' && field != 'count_id') {
      return field.split('_')[0];
    } else {
      return field.split('_').join(' ');
    }
  }

  /**
   * This method verifies all the fields that are required in a form.
   *
   * @param fields
   * @param body
   * @returns
   */
  validateRequired(fields: any, body: any) {
    return new Promise((resolve, reject) => {
      fields.forEach((element: any, index: any) => {
        if (
          !body[fields[index]]?.toString() ||
          body[fields[index]] === '' ||
          body[fields[index]] === ' ' ||
          body[fields[index]]?.length === 0 ||
          ((typeof body[fields[index]] === 'string' ||
            body[fields[index]] instanceof String) &&
            !body[fields[index]].replace(/\s/g, '').length)
        ) {
          let errorMessage = `${this.getFieldName(
            fields[index]
          )} is required, the ${this.getFieldName(
            fields[index]
          )} must not contain only whitespace`;
          errorMessage =
            errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
          reject({ message: errorMessage, field: fields[index] });
        }
      });
      resolve(true);
    });
  }

  /**
   * This method verifies the email addresses in the form.
   *
   * @param fields
   * @param body
   * @returns
   */
  validateEmail(fields: any, body: any) {
    return new Promise((resolve, reject) => {
      fields.forEach((element: any, index: any) => {
        if (
          fields[index] === 'email' &&
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            body[fields[index]]
          )
        ) {
          reject('Enter a valid email address');
        }
      });
      resolve(true);
    });
  }

  /**
   * This method verifies the urls in the form.
   *
   * @param fields
   * @param body
   * @returns
   */
  validateURL(field: any) {
    return new Promise((resolve, reject) => {
      if (
        !/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(
          field
        )
      ) {
        reject('Enter a valid URL');
      }
      resolve(true);
    });
  }

  /**
   * Following rules apply to a valid bucket name
   *
   * Bucket names must be between 3 and 63 characters long.
   * Bucket names can consist only of letters, numbers, dots (.), and hyphens (-).
   * Bucket names must begin and end with a letter or number.
   * Bucket names must not be formatted as an IP address (for example, 192.168.5.4).
   * Bucket names must not start with the prefix xn--.
   * Bucket names must not end with the suffix -s3alias.
   * Bucket names must be unique within a partition. A partition is a grouping of Regions.
   * Buckets used with Amazon S3 Transfer Acceleration can't have dots (.)
   *
   * @param fields
   * @param body
   * @returns
   */
  validateBucketName(field: any) {
    return new Promise((resolve, reject) => {
      if (
        !/(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)/gi.test(
          field
        ) ||
        /\s/gi.test(field)
      ) {
        reject('Enter a valid Bucket Name');
      }
      resolve(true);
    });
  }

  /**
   * Following rules apply to a valid host name
   *
   *
   *
   * @param fields
   * @param body
   * @returns
   */
  validateHostname(field: any) {
    return new Promise((resolve, reject) => {
      if (
        (!/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi.test(
          field
        ) &&
          !/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/gi.test(
            field
          )) ||
        /\s/gi.test(field)
      ) {
        reject('Enter a valid Host Name');
      }
      resolve(true);
    });
  }

  /**
   * Following rules apply to a valid host name
   *
   *
   *
   * @param fields
   * @param body
   * @returns
   */
  validateFolderName(field: any) {
    return new Promise((resolve, reject) => {
      if (!/^[a-zA-Z].*/gi.test(field) || /\s/gi.test(field)) {
        reject('Enter a valid folder name');
      }
      resolve(true);
    });
  }

  /**
   * This method validates the password in the form.
   *
   * @param fields
   * @param body
   * @returns
   */
  validatePassword(fields: any, body: any) {
    return new Promise((resolve, reject) => {
      fields.forEach((element: any, index: any) => {
        if (
          fields[index] === 'password' &&
          (body[fields[index]].length < 8 || body[fields[index]].length > 20)
        ) {
          reject('Enter a password in between 8 to 20 characters');
        }
      });
      resolve(true);
    });
  }

  /**
   * This method verifies the fields that should be greater than zero.
   *
   * @param fields
   * @param body
   * @returns
   */
  validateGreaterThanZero(fields: any, body: any) {
    return new Promise((resolve, reject) => {
      fields.forEach((element: any, index: any) => {
        if (body[fields[index]] <= 0) {
          let errorMessage = `${this.getFieldName(
            fields[index]
          )} should be greater than zero`;
          errorMessage =
            errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
          reject({ message: errorMessage, field: fields[index] });
        }
      });
      resolve(true);
    });
  }

  /**
   * This method verifies the fields that should be non-zero.
   *
   * @param fields
   * @param body
   * @returns
   */
  validateNonNegative(fields: any, body: any) {
    return new Promise((resolve, reject) => {
      fields.forEach((element: any, index: any) => {
        if (body[fields[index]] < 0) {
          let errorMessage = `${this.getFieldName(
            fields[index]
          )} can not be negative`;
          errorMessage =
            errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
          reject({ message: errorMessage, field: fields[index] });
        }
      });
      resolve(true);
    });
  }

  /**
   * This method verifies the fields that should be non-zero.
   *
   * @param fields
   * @param body
   * @returns
   */
  validateLength(fields: any, body: any, minLength: number, maxLength: number) {
    return new Promise((resolve, reject) => {
      try {
        fields.forEach((element: any, index: any) => {
          if (body[fields[index]].length < minLength) {
            let errorMessage = `${this.getFieldName(
              fields[index]
            )} can not be less than ${minLength}`;
            errorMessage =
              errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
            reject({ message: errorMessage, field: fields[index] });
          } else if (body[fields[index]].length > maxLength) {
            let errorMessage = `${this.getFieldName(
              fields[index]
            )} can not be greater than ${maxLength}`;
            errorMessage =
              errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
            reject({ message: errorMessage, field: fields[index] });
          }
        });
        resolve(true);
      } catch (error: any) {
        reject(error.message);
      }
    });
  }

  /**
   * This method verifies the port number.
   *
   * @param fields
   * @param body
   * @returns
   */
  validatePortNumber(fields: any, body: any) {
    return new Promise((resolve, reject) => {
      fields.forEach((element: any, index: any) => {
        if (body[fields[index]] > 65535) {
          let errorMessage = `${this.getFieldName(
            fields[index]
          )} can not be greater than 65535`;
          errorMessage =
            errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
          reject({ message: errorMessage, field: fields[index] });
        }
      });
      resolve(true);
    });
  }

  /**
   * This method validates date range.
   *
   * @param fields
   * @param body
   * @returns
   */
  async validateDateRange(
    fields: any,
    range: number,
    body: any,
    timezone?: any
  ) {
    return new Promise((resolve, reject) => {
      try {
        fields.forEach((element: any, index: any) => {
          if (
            timezone &&
            new Date(body[fields[index]]).getTime() <
              this.getTimezoneConvertedTime(timezone, range)
          ) {
            let errorMessage = `${this.getFieldName(
              fields[index]
            )} is not valid`;
            errorMessage =
              errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
            reject({ message: errorMessage, field: fields[index] });
          } else if (
            new Date(body[fields[index]]).getTime() <=
            new Date().getTime() + range
          ) {
            let errorMessage = `${this.getFieldName(
              fields[index]
            )} is not valid`;
            errorMessage =
              errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
            reject({ message: errorMessage, field: fields[index] });
          }
        });
        resolve(true);
      } catch (error: any) {
        reject(error.message);
      }
    });
  }

  /**
   * This method takes the timezone and delta (time difference) as a parameter and converts the current time accordingly.
   *
   * @param timezone
   * @param delta
   * @returns
   */
  getTimezoneConvertedTime(timezone: any, delta: any): number {
    var now = new Date(),
      utc = new Date(
        now.getTime() +
          now.getTimezoneOffset() * 60000 +
          delta +
          timezone.match(/[+|-]\d+/)[0] * 3600000
      );
    return utc.getTime();
  }

  /**
   * this method check uniquness of the input from the given array
   * @param arr
   * @param code
   * @returns
   */

  checkUinqiness(arr: any, input: any, field: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (arr.includes(input)) {
        reject({ message: `${field} is not unique`, field: `${field}` });
      } else {
        resolve(true);
      }
    });
  }
}
