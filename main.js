import {addBook} from "./src/modules/newBook";
import {showMenuContent} from "./src/modules/aside";
import {loadlibrary} from "./src/modules/loadCollection";
import {searchItems} from "./src/modules/elasticSearch";
addBook('#addBookBtn')
showMenuContent('.menu-sections', '.aside-buttons')
loadlibrary()
searchItems('.elastic-search', '.elastic-list')