
<div class="single_meta">

	<div class="mobile-split">
	<!-- categories  -->
		<div class="entry-cats flat">
			<ul class="entry-cats-container">
				<?php
				foreach((get_the_category()) as $category) {
				  
					$category_link = get_category_link($category->cat_ID);
					$postcat= $category->cat_ID;
					$catname =$category->cat_name;
					//echo $postcat;
					//echo $catname;
					//echo $category_link;
					echo '<li><a href="'.esc_url( $category_link ).'" title="'.esc_attr($catname).'">'.$catname.'</a></li>';
				}
				?>
			</ul>
		</div>

		<!-- tags -->
		<div class="entry-tags flat">
			<ul class="entry-tags-container">
				<?php
				global $post;
				if ( get_the_tags($post->ID) ){
				foreach(get_the_tags($post->ID) as $tag)
				{
				echo '<li><a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a></li>';
				}
				}?>

			</ul>
		</div>
	</div>

	<div class="mobile-split">
		<!-- date & views -->
		<div class="entry-date flat">
			<div class="entry-date-container">
				<span>
					<p>
						<?php echo get_the_date( 'Y-m-d' ); ?>
					</p>
				</span>
			</div>
		</div>

		<div class="entry-views flat">
			<div class="entry-views-container">
				<span>
					<p>
						<?php the_views(); ?>
					</p>
				</span>
			</div>
		</div>
	</div>

</div>