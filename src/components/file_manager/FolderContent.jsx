import Folder from '../../components/file_manager/Folder';
import File from '../../components/file_manager/File';
import Zoom from '@mui/material/Zoom';

const FolderContent = ({ folder, onFolderClick, selectedFolder, handleFolderSelect, selectedFile, handleFileSelect, toggleDrawer, folderRef, fileRef, arrangement}) => {
  // Check if folder content exists before filtering
  const folders = folder.content && folder.content.filter(item => item.type === 'folder') || [];
  const files = folder.content && folder.content.filter(item => item.type === 'file') || [];

  const compareFunction = (a, b) => a.name.localeCompare(b.name);

  if (arrangement === 'Alphabetically') {
    folders.sort(compareFunction);
    files.sort(compareFunction);
  }


  return (
    <div className="folder-content">
      {folders.length > 0 && (
        <div>
          <p className="font-medium text-xs">Folders</p>
          <div ref={folderRef} className="grid grid-cols-3 gap-2">
            {folders.map((item, index) => (
              <Zoom in={true} timeout={(index + 1) * 100}>
              <div className="mt-5">
                  <Folder
                  timeout={100} // make this timeout props to be between 100 to 500 depending oin the number of folders 
                  key={item.id} 
                  folder={item} 
                  onFolderClick={onFolderClick}
                  onFolderSelect={handleFolderSelect}
                  isSelected={selectedFolder === item} // Check if the folder is selected 
                  toggleDrawer={toggleDrawer} />
              </div>
              </Zoom>
            ))}
            </div>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-7">
          <p className="font-medium text-xs">Files</p>
          <div ref={fileRef} className="grid grid-cols-3 gap-2">
            {files.map((item) => (
              <div className="mt-5">
                <File 
                key={item.id} 
                file={item}
                onFileSelect={handleFileSelect}
                isSelected={selectedFile === item} // Check f the folder is selected
                toggleDrawer={toggleDrawer} />
              </div>
            ))}
          </div>
        </div>
      )}
 
      {folders.length === 0 && files.length === 0 && (
        <div className="text-center">
          <p className="text-sm text-gray-500 mt-3">Sorry, there's no document in this section.</p>
        </div>
      )}
    </div>
  );
};
export default FolderContent;