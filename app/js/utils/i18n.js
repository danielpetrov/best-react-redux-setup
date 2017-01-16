const englishTranslation = {
    'header-home-link-text': 'Home',
    'nav-sampleLocation': 'Sample',
    'file-successfully-download': 'File downloaded successfully!',
    'file-upload-browse-button': 'Browse',
    'file-upload-remove-button': 'Remove',
    'file-upload-send-button': 'Send',
    'file-upload-input-placeholder': 'Please select file to upload...',
    'file-upload-successful-upload-message': 'Report uploaded successfully!',
    'footer-copyright': '|  Copyright © 2016',
    'footer-privacy': 'Privacy Information',
    'not-implemented': 'Not Implemented Yet!'
}

export const i18n = ({ key, lang }) => {
    switch (lang) {
        case 'en':
            return englishTranslation[key]
        default:
            return englishTranslation[key]
    }
}
