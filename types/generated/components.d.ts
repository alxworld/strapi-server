import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesRichText extends Struct.ComponentSchema {
  collectionName: 'components_features_rich_texts';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface FeaturesSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_features_spoilers';
  info: {
    displayName: 'Spoiler';
    icon: 'cog';
  };
  attributes: {
    actualSpoiler: Schema.Attribute.Text;
    clickableText: Schema.Attribute.String;
  };
}

export interface FeaturesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
    icon: 'feather';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.rich-text': FeaturesRichText;
      'features.spoiler': FeaturesSpoiler;
      'features.testimonial': FeaturesTestimonial;
    }
  }
}
