import { useState } from 'react'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/z-fab.png"
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fabricio Zillig</strong>
                            <time title="04 de Dezembro 2023 às 18:30" dateTime="2023-12-04 18:30:00" className={styles.postDate}>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} title="Aplaudir Comentário">
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}