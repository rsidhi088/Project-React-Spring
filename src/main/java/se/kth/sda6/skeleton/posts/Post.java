package se.kth.sda6.skeleton.posts;

import org.hibernate.annotations.GeneratorType;
import org.hibernate.validator.constraints.Length;
import se.kth.sda6.skeleton.comments.Comment;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

// @TODO add Hibernate annotations to define which table and columns should be used to save the Post Object.
@Entity
@Table(name = "post")
public class Post {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Length(min = 1, max = 200, message = "It can not be empty!")
    @Column(name = "body")
    private String body;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    public Post() {
    }

    public Post(String body) {
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void addComment(Comment comment) {
        comments.add( comment );
        comment.setPost( this );
    }

    public void removeComment(Comment comment) {
        comments.remove( comment );
        comment.setPost( null );
    }
}
