const PROPERTIES = PropertiesService.getScriptProperties()

const SNS_DISPLAY_COUNT = PROPERTIES.getProperty('SNS_DISPLAY_COUNT') ? PROPERTIES.getProperty('SNS_DISPLAY_COUNT') : 50 ;
const COMMENT_DISPLAY_COUNT = PROPERTIES.getProperty('COMMENT_DISPLAY_COUNT') ? PROPERTIES.getProperty('COMMENT_DISPLAY_COUNT') : 10 ;

const SNS_BOARD_URL = PROPERTIES.getProperty('SNS_BOARD_URL');

const UPLOAD_FOLDER_URL = PROPERTIES.getProperty('UPLOAD_FOLDER_URL');