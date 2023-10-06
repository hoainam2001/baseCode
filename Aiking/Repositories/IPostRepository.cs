﻿using Aiking.Dtos;

namespace Aiking.Repositories
{
    public interface IPostRepository
    {
        public Task<List<PostDto>> GetAllPostAsync();
        public Task<PostDto> GetPostAsync(int id);
        public Task<int> AddPostAsync(PostDto model);
        public Task UpdatePostAsync(int id, PostDto model);
        public Task DeletePostAsync(int id);
    }
}
