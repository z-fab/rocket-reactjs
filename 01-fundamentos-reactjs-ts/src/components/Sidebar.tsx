import { PencilSimpleLine } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
     
            <img className={styles.cover} src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/z-fab.png"/>

                <strong>Fabricio Zillig</strong>
                <span>Designer & Data Scientist</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}