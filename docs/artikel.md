---
layout: page
title: Artikel
permalink: /article/
---
<div class="latest-article-content">
	<div class="row">
	  	{% for post in site.posts %}
	    <div class="col-md-4 col-12 article-item">
              <div class="latest-article-card">
                <a href="{{ post.url | relative_url }}">
                  <div class="card border article-card">
                    <div class="card-body article-title-wrapper">
                      <h6 class="card-subtitle mb-2 text-muted">{{ post.category | upcase }}</h6>
                      <h4 class="card-title">{{ post.title }}</h4>
                    </div>
                  </div>
                </a>
              </div>
        </div>
	  	{% endfor %}
	</div>
</div>
