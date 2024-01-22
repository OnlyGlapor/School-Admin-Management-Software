import { BsFolderSymlink } from 'react-icons/bs';
import { LiaGoogleDrive } from 'react-icons/lia';
import { BiTrashAlt } from 'react-icons/bi';


export const folderData = {
  id: 1,
  name: 'Root Folder',
  type: 'folder',
  label: 'default', // Add a label property
  total_file: '12',
  content: [
    {
      id: 2,
      name: 'Recent',
      type: 'folder',
      label: 'default', // Add a label property
      total_file: '4',
      content: [
        
      ],
    },
    {
      id: 3,
      name: 'Documents',
      type: 'folder',
      label: 'custom', // Add a label property
      total_file: '8',
      content: [
        {
          id: 7,
          name: 'Teachers',
          type: 'folder',
          label: 'default', // Add a label property
          description: 'This folder is about Teachers',
          size: '150KB',
          date_modified: '1 days ago',
          location: 'Documents',
          total_file: '5',
          content: [
            {
              id: 8,
              name: 'Payroll.txt',
              type: 'file',
              label: 'custom', // Add a label property
              size: '10KB'
            },
          ],
        },
        {
          id: 11,
          name: 'New folder 1',
          type: 'folder',
          label: 'default', // Add a label property
          description: 'This folder is about Teachers',
          size: '150KB',
          date_modified: '1 days ago',
          location: 'Documents',
          total_file: '5',
          content: [
            {
              id: 10,
              name: 'Activities_Photos.png',
              type: 'file',
              label: 'custom', // Add a label property
              size: '10KB',
            },
          ],
        },
        {
          id: 14,
          name: 'File 3',
          type: 'file',
          label: 'custom', // Add a label property
          size: '15KB',
        },
      ],
    },
    {
      id: 4,
      name: 'Google Drive',
      type: 'folder',
      label: 'default', // Add a label property
      total_file: '12',
      content: [],
    },
    {
      id: 5,
      name: 'Trash',
      type: 'folder',
      label: 'default', // Add a label property
      total_file: '12',
      content: [],
    },
  ],
};