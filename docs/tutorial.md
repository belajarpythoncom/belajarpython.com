---
layout: page
title: Tutorial
permalink: /tutorial/
---

{% for tut in site.tutorial %}
	{{ tut.title | jsonify }},{{ tut.order }}
{% endfor %}