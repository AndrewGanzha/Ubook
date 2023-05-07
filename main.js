import {addBook} from "./modules/newBook";
import {showMenuContent} from "./modules/aside";
import {loadlibrary} from "./modules/loadCollection";
addBook('#addBookBtn')
showMenuContent('.menu-sections', '.aside-buttons')
loadlibrary()