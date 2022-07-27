import { environment } from 'src/environments/environment';

export class AppConstants {
  public static baseUrl = environment.baseURL;

  // Generals
  public static OK = 'Ok';
  public static ACTIF = 'ACTIF';
  public static INACTIF = 'INACTIF';

  // routes
  public static DASHBOARD = 'dashboard';
  public static AUTH_LOGIN = 'auth';

  // Languages
  public static FR_LANG = 'fr';
  public static EN_LANG = 'en';

  // Pages Code
  public static ADMIN = 'DASH';
  public static GRANITE = 'GRANITE';
  public static PRODUCT = 'PRODUCT';
  public static ORDER = 'ORDER';

  // Actions
  public static EDIT = 'edit';
  public static VIEW = 'view';
  public static CREATE = 'create';
  public static DELETE = 'delete';
  public static SUCCESS = 'success';
  public static CONFIRM = 'confirm';
  public static CHECKBOX = 'checkbox';
  public static TOGGLE = 'toggle';

  public static PAGINATION = 'pagination';
  public static DOWNLOAD = 'download';

  //Table Type
  public static TEXT = 'text';
  public static BADGE = 'badge';
  public static DATE = 'date';
  public static STATUS = 'status';
  public static TAG_ARRAY = 'tagArray';
  public static TAG = 'tag';
  public static NUMBER = 'number';
  public static Admin = 'admin';
  public static INDEX = 'index';
  public static ADD = 'add';
  public static TEXT_ARRAY = 'textArray';

  //Sorting
  public static DEC = 'dec';
  public static ASC = 'asc';

  // Errors
  public static PRIMARY = 'primary';
  public static SECONDARY = 'secondary';

  // public static SUCCESS = "success"; ALREADY EXISTS CAN BE REUSE
  public static DANGER = 'danger';
  public static WARNING = 'warning';
  public static INFO = 'info';
  public static LIGHT = 'light';
  public static DARK = 'dark';

  // messages
  public static INVALID_DATA = 'Data is not valid';
  public static UPSERT_SUCCESSFULLY = 'Upsert Successfully';

  // tabs
  public static ACTIVE_TAB = 'active tab';
  public static TAB = 'tab';

  // Success Messages
  public static LOGGED_IN_SUCCESSFULLY = 'Logged In Successfully';

  // Danger Messages
  public static LOGGED_IN_FAILED = 'Logged In Failed';
  public static NO_RESOURCE =
    'The resource you are trying to access does not exist!';
}
