import { useRef, useState, useEffect } from 'react';

import styles from './styles.module.css';
import Box from '../../components/reusable/box';
import SearchBar from '../../components/reusable/searchBar';
import Avatar from '../../components/reusable/avatar';

import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { IoMdArrowUp,  IoMdMore } from 'react-icons/io';
import { AiOutlineEdit, AiOutlineFullscreen, AiTwotoneFolderOpen, AiOutlineCaretDown } from 'react-icons/ai';
import { BiExport } from 'react-icons/bi';

import CustomPieChart from '../../components/reusable/PieChart';
import DoughnutPie from '../../components/reusable/DoughnutPie';

import SemiCircleProgressBar from '../../components/reusable/SemiCircleProgressBar';

export default function FolderDetail() {
  return (
  	<div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.top_section}>
              <div className={styles.left}>
                <div className={styles.back_button}>
                  <IoMdArrowUp color="#000" />
                </div>
                <div className={styles.left_item}>
                  <p id={styles.title}>My Files</p>
                </div>
                <div className={styles.left_item}>
                  <p id={styles.title}>Projects</p>
                </div>
              </div>
              <div className={styles.right}>
              {/*Search Icon, List View Icon, Sort Icon & More Icon*/}
              </div>
            </div>

            <div className={styles.middle_section}>
              <div style={{ position: 'relative'}}>
                <p className={styles.title}>Folders</p>
                <div className={styles.folder_container}>
                  <FolderItem />
                  <FolderItem />
                </div>

              </div>

              <div style={{ position: 'relative', marginTop: 30}}>
                <p className={styles.title}>Files</p>
                <div className={styles.folder_container}>
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                  <FileItem />
                </div>

              </div>
            </div>

            {/*Files Grid*/}

        </div>

        <div className={styles.sideBar}>
          <div>
            <DoughnutPie />
          </div>
        </div>
      <div>
      </div>
    </div>
  )
}

const TopItem = () => {
  return(
    <div className={styles.top_item}>
      <div style={{ display: 'flex'}}>
        <div style={{ backgroundColor: '#fff', padding: 5, display: 'flex', borderRadius: 5}}>
          <AiTwotoneFolderOpen />
        </div>
      </div>
      <div className={styles.text_container}>
        <p className={styles.name}>Projects</p>
        <p>12 files</p>
      </div>
    </div>
  )
}


const FolderItem = () => {
  return(
    <div className={styles.folder_item}>
        <div style={{ backgroundColor: '#fff', padding: 5, display: 'flex', borderRadius: 5}}>
          <AiTwotoneFolderOpen size={20} />
        </div>
        <div className={styles.text_container}>
          <p className={styles.name}>Projects</p>
        </div>
    </div>
  )
}


const FileItem = () => {
  return(
    <div className={styles.file_item}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 75, cursor: 'pointer'}}>
          <AiTwotoneFolderOpen size={30} />
        </div>
        <div className={styles.text_container}>
          <p className={styles.name}>12th Grade Project RoadMap</p>
        </div>
    </div>
  )
}


const TeacherListItem = () => {
  return(
    <li>
      <div>
        <p className={styles.name}>K Zubah Kollie</p>
        <p className={styles.subject}>Computer Science</p>
      </div>
      <IoMdArrowUp />
    </li>
  )
}

const MonitorItem = () => {
  return(
    <div className={styles.monitorItem}>
      <div className={styles.dot_container}>
        <GoDotFill />
      </div>
      <div className={styles.textContainer}>
        <p>Mr Jerry is supposed to be in English class by now.</p>
        <p id={styles.time_left}>40 mins left</p>
      </div>
    </div>
  )
}


const CurriculumItem = () => {
  return(
    <div className={styles.curriculum_item}>
      <p id={styles.title}>English Language</p>
      <p id={styles.time}>2015 - present</p>

      <div className={styles.view_button}>
        <p>View</p>
      </div>
    </div>
  )
}

const DocumentList = () => {
  return(
      <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Document Name <AiOutlineCaretDown /></th>
            <th>Size <AiOutlineCaretDown /></th>
            <th>Last Edit <AiOutlineCaretDown /></th>
            <th>Members <AiOutlineCaretDown /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>1st Grade English Test (Period I)</td>
              <td>3.0 KB</td>
              <td>July 12, 2001</td>
              <td>Male</td>
              <td><IoMdMore size={20} /></td>
          </tr>
        </tbody>
      </table>
      </div>
  );
}