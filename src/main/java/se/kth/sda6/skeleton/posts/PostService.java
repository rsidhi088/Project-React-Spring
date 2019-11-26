package se.kth.sda6.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/*
    @TODO Autowire the PostRepository and use it to implement all the service methods.
 */
@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Optional<Post> getByID(Long id) {
        return postRepository.findById(id);
    }

    public Post save(Post post) {
        // @TODO save the post to DB and return the saved post
        return postRepository.save(post);

    }

    public Post update(Post post) {
        // @TODO update the post if it exists in DB and return the updated post.
        if (getByID(post.getId()).isPresent()) {
            return postRepository.save(post);
        }
        return null;
    }

    public void deleteById(Long id) {
        postRepository.deleteById(id);
    }
}
