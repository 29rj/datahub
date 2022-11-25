package com.linkedin.gms.factory.kafka;

import com.datahub.kafka.avro.serializer.KafkaAvroSerializer;
import com.linkedin.gms.factory.spring.YamlPropertySourceFactory;
import java.util.Arrays;
import java.util.Map;
import org.apache.avro.generic.IndexedRecord;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;


@Configuration
@PropertySource(value = "classpath:/application.yml", factory = YamlPropertySourceFactory.class)
@EnableConfigurationProperties(KafkaProperties.class)
public class DataHubKafkaProducerFactory {

  @Value("${kafka.bootstrapServers}")
  private String kafkaBootstrapServers;

  // CHANGE THIS
  @Bean(name = "kafkaProducer")
  protected Producer<String, IndexedRecord> createInstance(KafkaProperties properties) {
    KafkaProperties.Producer producerProps = properties.getProducer();

    producerProps.setKeySerializer(StringSerializer.class);
    // KAFKA_BOOTSTRAP_SERVER has precedence over SPRING_KAFKA_BOOTSTRAP_SERVERS
    if (kafkaBootstrapServers != null && kafkaBootstrapServers.length() > 0) {
      producerProps.setBootstrapServers(Arrays.asList(kafkaBootstrapServers.split(",")));
    } // else we rely on KafkaProperties which defaults to localhost:9092

    producerProps.setValueSerializer(KafkaAvroSerializer.class);
    return new KafkaProducer<>(producerProps.buildProperties());
  }
}
