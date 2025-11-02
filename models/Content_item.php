<?php

class Content_item {
    public $id;
    public $source;
    public $content_type;
    public $url;
    public $title;

    static function from_array($array) {
        $content_item = new Content_item();
        $content_item->id = $array["id"];
        $content_item->source = $array["source"];
        $content_item->content_type = $array["content_type"];
        $content_item->url = $array["url"];
        $content_item->title = $array["title"];

        return $content_item;
    }
}
