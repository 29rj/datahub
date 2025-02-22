package io.datahubproject.openapi.util;

import com.linkedin.data.schema.annotation.PathSpecBasedSchemaAnnotationVisitor;
import com.linkedin.gms.factory.spring.YamlPropertySourceFactory;
import com.linkedin.metadata.models.registry.EntityRegistry;
import io.datahubproject.openapi.config.OpenAPIEntityTestConfiguration;
import io.datahubproject.openapi.dto.UpsertAspectRequest;
import io.datahubproject.openapi.generated.ContainerEntityRequestV2;
import io.datahubproject.openapi.generated.ContainerKey;
import io.datahubproject.openapi.generated.ContainerKeyAspectRequestV2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.util.List;

import static org.junit.Assert.assertNotNull;
import static org.testng.AssertJUnit.assertEquals;


@Import({OpenAPIEntityTestConfiguration.class})
@PropertySource(value = "classpath:/application.yml", factory = YamlPropertySourceFactory.class)
public class OpenApiEntitiesUtilTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private EntityRegistry entityRegistry;

    @BeforeTest
    public void disableAssert() {
        PathSpecBasedSchemaAnnotationVisitor.class.getClassLoader()
                .setClassAssertionStatus(PathSpecBasedSchemaAnnotationVisitor.class.getName(), false);
    }

    @Test
    public void testInitialization() {
        assertNotNull(entityRegistry);
    }

    @Test
    public void containerConversionTest() {
        ContainerEntityRequestV2 test = ContainerEntityRequestV2.builder()
                .urn("urn:li:container:123")
                .containerKey(ContainerKeyAspectRequestV2.builder().value(ContainerKey.builder().guid("123").build()).build())
                .build();
        List<UpsertAspectRequest> expected = List.of(UpsertAspectRequest.builder()
                .entityType("container")
                .entityUrn("urn:li:container:123")
                .aspect(ContainerKey.builder().guid("123").build())
                .build());

        assertEquals(expected, OpenApiEntitiesUtil.convertEntityToUpsert(test, ContainerEntityRequestV2.class, entityRegistry));
    }
}
