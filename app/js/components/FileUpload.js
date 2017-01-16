import React, { PureComponent, PropTypes } from 'react'
import classnames from 'classnames'
import { Text, Button } from '.'

export default class FileUpload extends PureComponent {
    render() {
        const { isFileUploading, isFileUploaded } = this.props
        const { accept, onFileUpload, onRemoveFileClick, onSendFileClick, fileName } = this.props

        return (
            <div className="file-uploader">
                {
                    isFileUploaded ?
                        fileName
                        : <Text iKey="file-upload-input-placeholder" className="file-placeholder" />
                }
                <span
                    className={classnames(
                        'btn btn-default btn-file',
                        {'disabled': isFileUploading}
                    )}
                >
                    <label htmlFor="file-upload-browse-button">
                        <i
                            style={{ color: 'white' }}
                            className="fa fa-search"
                        />
                        <Text iKey="file-upload-browse-button" />
                    </label>
                    <input
                        type="file"
                        id="file-upload-browse-button"
                        label="Upload"
                        accept={accept}
                        ref="fileInput"
                        style={{ display: 'none' }}
                        onChange={onFileUpload}
                    />
                </span>
                {
                    isFileUploaded ?
                        <Button
                            onClick={onRemoveFileClick}
                            disabled={isFileUploading}
                        >
                            <i
                                style={{ color: 'red' }}
                                className="fa fa-trash"
                            />
                            <Text iKey="file-upload-remove-button" />
                        </Button>
                        : null
                }
                {
                    isFileUploaded ?
                        <Button
                            isLoading={isFileUploading}
                            onClick={onSendFileClick}
                            disabled={isFileUploading}
                        >
                            <i
                                style={{ color: 'green' }}
                                className="fa fa-mail-forward"
                            />
                            <Text iKey="file-upload-send-button" />
                        </Button>
                        : null
                }
            </div>
        )
    }
}

FileUpload.defaultProps = {
    fileName: ''
}

FileUpload.propTypes = {
    isFileUploading: PropTypes.bool.isRequired,
    isFileUploaded: PropTypes.bool.isRequired,
    accept: PropTypes.string.isRequired,
    onFileUpload: PropTypes.func.isRequired,
    onRemoveFileClick: PropTypes.func.isRequired,
    onSendFileClick: PropTypes.func.isRequired,
    fileName: PropTypes.string
}
